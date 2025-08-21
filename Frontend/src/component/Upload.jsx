import React, { useRef } from 'react'
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import { CgAttachment } from 'react-icons/cg';

const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;

const authenticator = async () => {
    try {
        const response = await fetch(`${VITE_ENDPOINT_URL}/api/upload`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = ({ setImg }) => { //prop coming from NewPrompt.jsx

    const iKUploadRef = useRef(null);

    const onError = err => {
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("Success", res);
        setImg({
            isLoading: false,
            error: "",
            dbData: res,
        });
    };

    const onUploadProgress = progress => {
        console.log("Progress", progress);
    };

    const onUploadStart = async (evt) => {
        const file = evt.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setImg((prev) => ({
                ...prev,
                isLoading: true,
                aiData: {
                    inlineData: {
                        data: reader.result.split(",")[1],
                        mimeType: file.type,
                    },
                },
            }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <IKContext
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
        >
            <IKUpload
                fileName={"test_image.jpg"}
                onError={onError}
                onSuccess={onSuccess}
                useUniqueFileName={true}
                onUploadProgress={onUploadProgress}
                onUploadStart={onUploadStart}
                style={{ display: 'none' }}
                ref={iKUploadRef}
            />
            <label onClick={() => iKUploadRef.current.click()}><CgAttachment /></label>
        </IKContext>
    )
}

export default Upload
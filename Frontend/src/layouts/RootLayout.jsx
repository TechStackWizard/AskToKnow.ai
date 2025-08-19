import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
}

const queryClient = new QueryClient()

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <QueryClientProvider client={queryClient}>
                <div className='rootLayout h-screen flex flex-col '>
                    <header className='header w-full h-fit flex justify-between items-center py-[1rem] bg-black px-5' >

                        <Link to={"/"} className='flex items-center font-bold gap-2'>
                            <img src="/vite.svg" alt="logo" />
                            <span>AskToKnow.ai</span>
                        </Link>

                        <div className="cursor-pointer">
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>

                    </header>
                    <main className='grow overflow-hidden'>
                        <Outlet />
                    </main>
                </div>
            </QueryClientProvider>
        </ClerkProvider>
    )
}

export default RootLayout
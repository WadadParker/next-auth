"use client";

import { SessionProvider } from "next-auth/react";

export function Providers({children}:{children:React.ReactNode}) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}

// As we see with all other react libs, you need to wrap your app with SessionProvider for NextAuth to work
// But our root component is actually a server component, so instead we create a separate Providers.tsx file
// and we wrap our children present in root file with this SessionProvider
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {Geist} from 'next/font/google';
import './globals.css';
const geist=Geist({subsets:['latin'],display:'swap',variable:'--font-geist-sans'});
export const metadata:Metadata={metadataBase:new URL('https://ascend.app'),title:{default:'Ascend — Level up in real life',template:'%s | Ascend'},description:'A premium RPG-inspired identity transformation system for rituals, quests, XP, stats, achievements, and mentor intelligence.',openGraph:{title:'Ascend — Level up in real life',description:'Enter the identity transformation system.',url:'https://ascend.app',siteName:'Ascend',type:'website'},twitter:{card:'summary_large_image',title:'Ascend — Level up in real life',description:'A premium operating system for becoming stronger.'},alternates:{canonical:'/'}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body className={`${geist.variable} noise`}>{children}</body></html>}

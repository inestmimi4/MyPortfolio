// src/components/CustomLink/index.js
import Link from 'next/link';

export default function CustomLink({ children, href, ...props }) {
    if (!href) {
        console.error("The 'href' prop is required for CustomLink.");
        return null;
    }
    return (
        <Link href={href} {...props} legacyBehavior>
            {children}
        </Link>
    );
}
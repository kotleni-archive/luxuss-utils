import Link from 'next/link';

export default function Home() {
    return (
        <div className="p-4">
            <Link href="/pet-containers" className="text-blue-700">
                Pet containers
            </Link>
        </div>
    );
}

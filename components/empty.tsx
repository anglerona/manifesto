import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({ label }: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image alt="Empty" fill src="/empty.png" />
            </div>
            <p className="text-[#AF9B91] text-sm text-center dark:text-[#BBC3DA]">
                {label}
            </p>
        </div>
    );
}
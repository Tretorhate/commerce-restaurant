import { InfoBlock } from "@/shared/components/shared";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Do not have access"
        text="This page is available only for authorized users."
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}

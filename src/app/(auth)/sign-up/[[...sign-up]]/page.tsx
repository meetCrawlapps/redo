import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <BackgroundBeamsWithCollision className="fixed h-screen w-screen z-auto"></BackgroundBeamsWithCollision>
      <div className="w-full h-screen flex items-center justify-center">
        <SignUp afterSignOutUrl={"/"} forceRedirectUrl={"/dashboard"} />
      </div>
    </>
  );
}

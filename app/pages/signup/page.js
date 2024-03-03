import SignUp from "@/app/components/SignUp";
import Toast from "@/app/components/Toast";

export default function SignUpPage() {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: "100px",
        }}
      >
        <Toast />
        <SignUp />
      </div>
    </>
  );
}

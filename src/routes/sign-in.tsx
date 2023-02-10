import { createMutation } from "@tanstack/solid-query";
import { createSignal } from "solid-js";
import { signIn } from "~/api/auth";
import { z } from "zod";
import { setToken } from "~/auth/token";
import { useNavigate } from "solid-start";

const signInSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }).min(8),
});

export default function SignInPage() {
  const [getEmail, setEmail] = createSignal<string>("");
  const [getPassword, setPassword] = createSignal<string>("");
  const mutation = createMutation(signIn);
  const navigate = useNavigate();

  const validate = () => {
    return signInSchema.safeParse({
      email: getEmail(),
      password: getPassword(),
    });
  };

  const onSubmit = async (
    e: Event & {
      submitter: HTMLElement;
    } & {
      currentTarget: HTMLFormElement;
      target: Element;
    }
  ) => {
    e.preventDefault();
    const validation = validate();
    if (!validation.success) {
      return;
    }

    const { email, password } = validation.data;

    const { result } = await mutation.mutateAsync({ email, password });

    if (result) {
      setToken(result);
      navigate("/");
    }
  };

  return (
    <div class="m-auto w-full max-w-md bg-white p-5 shadow-md">
      <p>Welcome to LittleChatApp!</p>

      <form class="flex flex-col" onSubmit={onSubmit}>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type your email"
            class="input-bordered input w-full bg-white"
            onInput={(e) => setEmail(e.currentTarget.value)}
            value={getEmail()}
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type your password"
            class="input-bordered input w-full bg-white"
            onInput={(e) => setPassword(e.currentTarget.value)}
            value={getPassword()}
          />
        </div>

        <button
          class="btn-primary btn-sm btn mt-4 ml-auto text-xs text-white"
          type="submit"
          disabled={!validate().success}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

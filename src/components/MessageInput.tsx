import { CreateMutateAsyncFunction } from "@tanstack/solid-query";
import { createSignal } from "solid-js";
import { CreateMessage } from "~/api/messages";

interface MessageInputProps {
  sendMessage: CreateMutateAsyncFunction<any, any, CreateMessage>;
}

export default function MessageInput({ sendMessage }: MessageInputProps) {
  const [getMessage, setMessage] = createSignal<string>("");

  const onClickSendButton = async () => {
    await sendMessage({
      content: getMessage(),
      userId: "ce6f3daa-e69f-46bf-96c4-d1111af78ff8",
    });
  };

  return (
    <div class="mx-2 mt-auto mb-4 flex w-[calc(100%-16px)]">
      <textarea
        class="textarea-bordered textarea w-full focus:border-0"
        value={getMessage()}
        onInput={(e) => setMessage(e.currentTarget.value)}
      />
      <button
        onClick={onClickSendButton}
        class="btn-primary btn m-auto ml-4 text-white"
      >
        Send
      </button>
    </div>
  );
}

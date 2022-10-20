import { createQuery } from "@tanstack/solid-query";
import { For, Match, Switch } from "solid-js";

import { getMessages, Messages } from "~/api/messages";
import MessageDisplay from "~/components/Message";
import MessageInput from "~/components/MessageInput";
import Spinner from "~/components/Spinner";

export default function Home() {
  const query = createQuery<Messages[]>(() => ["messages"], getMessages);

  return (
    <main class="flex h-full">
      <div class="m-auto flex h-[calc(100%-12px)] w-[calc(100%-12px)] flex-col rounded-md border">
        <div class="flex h-full flex-col">
          <Switch>
            <Match when={query.isLoading}>
              <Spinner class="m-auto h-8 w-8" />
            </Match>
            <Match when={query.isSuccess}>
              <For each={query.data}>
                {({ content }) => <MessageDisplay content={content} />}
              </For>
            </Match>
          </Switch>
        </div>

        <MessageInput />
      </div>
    </main>
  );
}

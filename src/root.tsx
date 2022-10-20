// @refresh reload
import { QueryClientProvider } from "@tanstack/solid-query";
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

import { queryClient } from "~/api";

export default function Root() {
  return (
    <Html lang="en" data-theme="cupcake">
      <Head>
        <Title>Little chat App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </QueryClientProvider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

import { Helmet } from "react-helmet-async";
import { ANCHORS } from "../data/navigation";
import { ButtonLink } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="container-page flex min-h-[60dvh] flex-col items-start justify-center py-24">
      <Helmet>
        <title>Page not found | Olkhon International Consultants</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">This page does not exist</h1>
      <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
        The link may be out of date. Everything you need is on the home page.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Go to the home page</ButtonLink>
        <ButtonLink href={ANCHORS.contact} variant="secondary">
          Contact Olkhon International
        </ButtonLink>
      </div>
    </section>
  );
}

import React from "react";

const BackGroundReversed = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-800  w-full z--40">
      <section className="relative isolate overflow-hidden bg-accent px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-y-0 left-1/2 -z-10 w-[200%] origin-bottom-right skew-x-[30deg] bg-primary shadow-xl shadow-gray-400 ring-1 ring-indigo-50 ml-60" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">{children}</div>
      </section>
    </div>
  );
};

export default BackGroundReversed;

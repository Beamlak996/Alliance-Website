import { Link } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

export const Cta = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="overflow-hidden  sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-rose-500 md:text-3xl animate-bounce">
              Unlock Your Future at Alliance College!
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block animate-fade-in">
              At Alliance College, we’re dedicated to empowering students with
              the skills and knowledge they need to succeed in today's world.
              Join us and start your journey towards excellence!
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="#"
                className="inline-block rounded bg-rose-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-600 focus:outline-none focus:ring focus:ring-yellow-400 animate-pulse"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Alliance College Campus"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full rounded-l-xl"
        />
      </section>
    </BackgroundBeamsWithCollision>
  );
};

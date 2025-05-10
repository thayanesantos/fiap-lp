import Header from "./components/header";
import Intro from "./components/intro";
// import Form from "./components/form";
import Courses from "./components/course";
// import Faq from "./components/faq";
import './styles.scss'

export default function Home() {
  return (
    <>
      <div className="z-60 bg-black items-center justify-items-center min-h-screen sm:p-20">
        <main className="flex flex-col">
          <section className="">
            <Header />
          </section>
          <section className="">
            <Intro />
            <br /><br />
          </section>
          <section>
            <Courses />
            <br /><br />
          </section>
          {/* <section>
            <Faq />
            <br /><br />
          </section> */}
        </main>
      </div>
    </>
  );
}



          {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
            <h3>test Thay</h3>
          </ol> */}
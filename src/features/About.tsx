import PageWrapper from "../components/pagewrapper/PageWrapper";

export default function About() {
  return (
    <PageWrapper title="About Me" description="Get to know me better">
      <div className="mx-auto text-secondaryTextColor dark:text-gray-200 space-y-6 leading-relaxed font-medium text-base sm:text-lg md:text-lg text-justify">
        <p>
          I am a{" "}
          <span className="font-semibold text-secondaryColor uppercase">
            Software Engineer
          </span>{" "}
          deeply passionate about React development, frontend technologies, and
          delivering clean, intuitive UI/UX experiences. I hold a Second-Class
          B.Sc (Hons) in Software Engineering from{" "}
          <span className="text-primaryTextColor font-semibold">
            Cardiff Metropolitan University
          </span>
          .
        </p>

        <p>
          I have extensive experience developing commercial React-based
          applications for clients across{" "}
          <span className="text-primaryTextColor font-semibold">Dubai</span>,
          the <span className="text-primaryTextColor font-semibold">UK</span>,
          and the{" "}
          <span className="text-primaryTextColor font-semibold">US</span>. My
          work spans diverse domains including e-commerce, tax management,
          social platforms, and IoT dashboards.
        </p>

        <p>
          Currently, I’m working at{" "}
          <span className="text-green-400">Zone24x7</span>, where I contribute
          to building scalable, high-performance web applications using
          technologies like{" "}
          <span className="text-primaryTextColor font-semibold">React</span>,{" "}
          <span className="text-primaryTextColor font-semibold">Redux</span>,{" "}
          <span className="text-primaryTextColor font-semibold">
            TypeScript
          </span>
          , and{" "}
          <span className="text-primaryTextColor font-semibold">Node.js</span>,
          while also integrating cloud services such as{" "}
          <span className="text-primaryTextColor font-semibold">Azure</span>.
        </p>

        <p>
          Previously, I worked at{" "}
          <span className="text-purple-400">Spades App</span> and{" "}
          <span className="text-purple-400">Arimac</span>, where I played a key
          role in designing and developing frontend systems using the{" "}
          <span className="text-primaryTextColor font-semibold">
            MERN stack
          </span>
          . I’ve built reusable component libraries, scalable design systems,
          and integrated complex RESTful APIs for enterprise applications.
        </p>

        <p>
          I take pride in writing clean, maintainable code with a focus on
          performance and accessibility. I love solving real-world problems
          through creative digital solutions and continuously evolving as a
          developer.
        </p>

        <p>
          Outside of tech, I enjoy{" "}
          <span className="text-secondaryColor font-bold">fish keeping</span>,{" "}
          <span className="text-secondaryColor font-bold">
            watching cricket
          </span>
          , and I'm proudly a{" "}
          <span className="text-secondaryColor font-bold">dog person</span>. I
          also like working on personal side projects that fuse technology with
          creativity.
        </p>
      </div>
    </PageWrapper>
  );
}

import { Divider } from "@/shared";
import { Intro } from "@/widgets/intro";
import { About } from "@/entities";
import { Projects } from "@/widgets/projects";
import { StoreProvider } from "../source/app/providers";

export default function MainPage() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}

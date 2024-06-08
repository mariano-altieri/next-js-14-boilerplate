import { Heading } from './commons/components/Heading';
import { MainLayout } from './commons/components/templates/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <div className="container my-3">
        <Heading>Welcome</Heading>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus consectetur
          cum veniam nobis incidunt, eos reprehenderit. Quisquam aut minima excepturi voluptates
          illum corporis dicta saepe error quaerat nihil! Debitis!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque magnam, quaerat
          corrupti inventore nostrum sed placeat, ipsum hic porro vel maxime consectetur deleniti
          officiis minima molestias ullam ipsam recusandae. Ratione, sed cumque cupiditate sit neque
          error dicta dignissimos enim earum iste eum, aliquid temporibus voluptas rem autem quae
          dolor optio corporis nemo quidem.
        </p>
        <p className="mb-4">
          Autem, consectetur adipisci? Odit, quisquam blanditiis. Nisi facilis deserunt reiciendis
          tempora amet placeat inventore impedit, iure aspernatur. Debitis accusamus totam facilis
          quae minima nobis quos molestiae neque.
        </p>
      </div>
    </MainLayout>
  );
}

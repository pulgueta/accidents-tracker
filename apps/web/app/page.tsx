import { Button } from 'ui/button';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-4">
          <Button className="w-full">Eliminar</Button>
          <Button className="w-full" variant="secondary">
            Eliminar
          </Button>
        </div>
      </div>
    </main>
  );
}

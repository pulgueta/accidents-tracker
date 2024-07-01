'use client';

import { useState } from 'react';

import { Button } from 'ui/button';
import { Heading, Paragraph } from 'ui/typography';
import { Input } from 'ui/input';
import { Label } from 'ui/label';

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main>
      <div className="flex flex-col items-center justify-center space-y-4 bg-red-400 p-4">
        <div className="container flex flex-col gap-4 rounded bg-red-500 p-4">
          <Heading>Encabezado</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            exercitationem animi consequatur recusandae temporibus rem vero
            aliquam fugiat sed laudantium debitis quam maxime suscipit, quasi
            dolore atque laboriosam iure vitae.
          </Paragraph>
          <Paragraph as="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            exercitationem animi consequatur recusandae temporibus rem vero
            aliquam fugiat sed laudantium debitis quam maxime suscipit, quasi
            dolore atque laboriosam iure vitae.
          </Paragraph>
        </div>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
          <Button className="w-full">Eliminar</Button>
          <Button className="w-full" variant="secondary">
            Eliminar
          </Button>
          <Label>Nombre</Label>
          <Input />
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect } from "react";

interface ResultsCalculator {
  result: number;
  resultActivityNone: number;
  resultActivityModerate: number;
  resultActivityIntense: number;
}

export function Result(props: ResultsCalculator) {
  useEffect(() => {
    goToButton();
  });
  const goToButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Card className="my-8">
        <CardHeader>
          <CardTitle>Seu resultado:</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nenhuma atividade fisica:</p>
          <p>
            <strong>{props.resultActivityNone}</strong> calorias/dia
          </p>
          <p className="pt-2">
            Atividade fisica moderada (30 minutos, 3x na semana):
          </p>
          <p>
            <strong>{props.resultActivityModerate}</strong> calorias/dia
          </p>
          <p className="pt-2">
            Atividade fisica intensa (1 hora pelo menos 4x na semana):
          </p>
          <p>
            <strong>{props.resultActivityIntense}</strong> calorias/dia
          </p>
        </CardContent>
      </Card>

      <Card className="my-8">
        <CardHeader>
          <CardTitle>
            <h1 className="mb-4 text-3xl font-extrabold text-orange-100 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-200 from-orange-300">
                Pronto para alcançar seus objetivos?
              </span>
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="pb-2">
            <strong>Emagrecer:</strong> Consumir MENOS calorias que o resultado
            encontrado.
          </p>
          <p className="pb-2">
            <strong>Ganhar massa:</strong> Consumir MAIS calorias que o
            resultado encontrado.
          </p>
          <p>
            Agora que você já sabe seu gasto calórico, que tal receber um
            planejamento completo pro seu objetivo baseado no resultado
            encontrado acima!
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link
              className="mx-auto"
              href="https://luckfarleypersonal.com.br/metodolf/"
            >
              Quero baixar agora
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

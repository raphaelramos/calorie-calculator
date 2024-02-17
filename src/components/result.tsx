import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ResultsCalculator {
  result: number;
  resultActivityNone: number;
  resultActivityModerate: number;
  resultActivityIntense: number;
}

export function Result(props: ResultsCalculator) {
  return (
    <Card className="my-8 w-[500px]">
      <CardHeader>
        <CardTitle>Sua taxa metabolica basal (TMB): {props.result}</CardTitle>
        <CardDescription>Resultado para dieta:</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Nenhuma atividade fisica: {props.resultActivityNone} calorias/dia</p>
        <p>
          Atividade fisica moderada: {props.resultActivityModerate} calorias/dia
        </p>
        <p>
          Atividade fisica intensa: {props.resultActivityIntense} calorias/dia
        </p>
      </CardContent>
      <CardFooter>
        <p>
          Para emagrecer remova 500Kcal e para aumentar o peso acrescente
          500Kcal.
        </p>
      </CardFooter>
    </Card>
  );
}

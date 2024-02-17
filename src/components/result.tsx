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
    <Card className="my-8">
      <CardHeader>
        <CardTitle>Sua taxa metabolica basal (TMB): {props.result}</CardTitle>
        <CardDescription>Resultado para dieta:</CardDescription>
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
      <CardFooter>
        <p>
          Para emagrecer remova 500Kcal e para aumentar o peso acrescente
          500Kcal.
        </p>
      </CardFooter>
    </Card>
  );
}

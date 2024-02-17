"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-select";
import { Result } from "@/components/result";

export default function Home() {
  const [result, setResult] = useState<number>(0);
  const [resultActivityNone, setResultActivityNone] = useState<number>(0);
  const [resultActivityModerate, setResultActivityModerate] =
    useState<number>(0);
  const [resultActivityIntense, setResultActivityIntense] = useState<number>(0);

  const formSchema = z.object({
    gender: z.string({ required_error: "Obrigatório" }),
    weight: z.string({ required_error: "Obrigatório" }).min(2, {
      message: "Insira seu peso",
    }),
    height: z.string({ required_error: "Obrigatório" }).min(2, {
      message: "Insira seu altura",
    }),
    age: z
      .string({ required_error: "Obrigatório" })
      .min(1, {
        message: "Insira sua idade",
      })
      .max(2, {
        message: "idade incorreta",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let result: number;
    let resultActivityNone: number;
    let resultActivityModerate: number;
    let resultActivityIntense: number;

    if (values.gender === "male") {
      result = parseFloat(
        (
          66 +
          13.7 * Number(values.weight) +
          5 * Number(values.height.replace(/[,.]/g, "")) -
          6.8 * Number(values.age)
        ).toFixed(2)
      );
      var total = result + result * 0.25;
      resultActivityNone = parseFloat(total.toFixed(2));

      total = result + result * 0.35;
      resultActivityModerate = parseFloat(total.toFixed(2));

      total = result + result * 0.45;
      resultActivityIntense = parseFloat(total.toFixed(2));
    } else {
      result = parseFloat(
        (
          655 +
          9.6 * Number(values.weight) +
          1.7 * Number(values.height.replace(/[,.]/g, "")) -
          4.7 * Number(values.age)
        ).toFixed(2)
      );
      var total = result + result * 0.2;
      resultActivityNone = parseFloat(total.toFixed(2));

      total = result + result * 0.3;
      resultActivityModerate = parseFloat(total.toFixed(2));

      total = result + result * 0.4;
      resultActivityIntense = parseFloat(total.toFixed(2));
    }

    // Atualize os estados para exibir os resultados na interface
    setResult(result);
    setResultActivityNone(resultActivityNone);
    setResultActivityModerate(resultActivityModerate);
    setResultActivityIntense(resultActivityIntense);
  }

  return (
    <div className="m-8 max-w-sm mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Calculadora de Calorias
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
        Comece por aqui à sua jornada rumo a sua transformação, se você quer:
        eliminar gordura ou ganhar massa magra com eficiência esse é o primeiro
        passo.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="female">Feminino</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso (kg)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Altura (cm)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idade</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Calcular</Button>
        </form>
      </Form>

      {result > 0 && (
        <Result
          result={result}
          resultActivityNone={resultActivityNone}
          resultActivityModerate={resultActivityModerate}
          resultActivityIntense={resultActivityIntense}
        ></Result>
      )}
    </div>
  );
}

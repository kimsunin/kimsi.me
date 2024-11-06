import { AreaChart, BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";
import { GaDataType } from "@/type/GaType";

type PropsType = {
  data: GaDataType;
};

export default function GaBox({ data }: PropsType) {
  return (
    <Card className="w-full rounded-2xl">
      <Text>총 방문자 수</Text>
      <Flex
        className="space-x-3 truncate"
        justifyContent="start"
        alignItems="baseline"
      >
        <Metric>{data.total.toLocaleString()}</Metric>
        <BadgeDelta
          deltaType={data.percent > 0 ? "moderateIncrease" : "moderateDecrease"}
        >
          {data.percent}%
        </BadgeDelta>
      </Flex>
      <AreaChart
        className="mt-6 h-28"
        data={data.list}
        index="date"
        valueFormatter={(number: number) =>
          Intl.NumberFormat("us").format(number).toString()
        }
        categories={["방문자 수"]}
        colors={["blue"]}
        showXAxis={true}
        showGridLines={false}
        startEndOnly={true}
        showYAxis={false}
        showLegend={false}
      />
    </Card>
  );
}

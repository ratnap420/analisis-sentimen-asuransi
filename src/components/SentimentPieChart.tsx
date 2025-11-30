import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SentimentPieChartProps {
  positif: number;
  negatif: number;
  netral: number;
  title: string;
}

const COLORS = {
  positif: 'hsl(142 76% 36%)',
  negatif: 'hsl(var(--destructive))',
  netral: 'hsl(var(--muted-foreground))'
};

export const SentimentPieChart = ({ positif, negatif, netral, title }: SentimentPieChartProps) => {
  const data = [
    { name: 'Positif', value: positif, color: COLORS.positif },
    { name: 'Negatif', value: negatif, color: COLORS.negatif },
    { name: 'Netral', value: netral, color: COLORS.netral },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)'
              }} 
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

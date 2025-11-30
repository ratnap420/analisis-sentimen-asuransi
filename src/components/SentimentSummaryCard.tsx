import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface SentimentSummaryCardProps {
  company: string;
  positif: number;
  negatif: number;
  netral: number;
  total: number;
}

export const SentimentSummaryCard = ({ company, positif, negatif, netral, total }: SentimentSummaryCardProps) => {
  const positifPercent = total > 0 ? ((positif / total) * 100).toFixed(1) : 0;
  const negatifPercent = total > 0 ? ((negatif / total) * 100).toFixed(1) : 0;
  const netralPercent = total > 0 ? ((netral / total) * 100).toFixed(1) : 0;

  const dominant = positif >= negatif && positif >= netral ? 'positif' : negatif > positif && negatif > netral ? 'negatif' : 'netral';

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          {company}
          {dominant === 'positif' && <TrendingUp className="h-5 w-5 text-green-600" />}
          {dominant === 'negatif' && <TrendingDown className="h-5 w-5 text-destructive" />}
          {dominant === 'netral' && <Minus className="h-5 w-5 text-muted-foreground" />}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Komentar</span>
            <span className="font-semibold">{total}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-600" />
                <span className="text-sm">Positif</span>
              </div>
              <span className="text-sm font-medium">{positif} ({positifPercent}%)</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all" 
                style={{ width: `${positifPercent}%` }} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm">Negatif</span>
              </div>
              <span className="text-sm font-medium">{negatif} ({negatifPercent}%)</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-destructive h-2 rounded-full transition-all" 
                style={{ width: `${negatifPercent}%` }} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-sm">Netral</span>
              </div>
              <span className="text-sm font-medium">{netral} ({netralPercent}%)</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-muted-foreground h-2 rounded-full transition-all" 
                style={{ width: `${netralPercent}%` }} 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

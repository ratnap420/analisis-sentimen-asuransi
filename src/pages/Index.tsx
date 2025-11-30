import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SentimentBarChart } from '@/components/SentimentBarChart';
import { SentimentSummaryCard } from '@/components/SentimentSummaryCard';
import { DateRangeFilter } from '@/components/DateRangeFilter';
import { ExportButton } from '@/components/ExportButton';
import { mockComments, getFilteredComments, getSentimentSummary } from '@/data/mockData';
import { BarChart3 } from 'lucide-react';
const Dashboard = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const allianzComments = useMemo(() => getFilteredComments('allianz', startDate, endDate), [startDate, endDate]);
  const prudentialComments = useMemo(() => getFilteredComments('prudential', startDate, endDate), [startDate, endDate]);
  const allianzSummary = useMemo(() => getSentimentSummary(allianzComments), [allianzComments]);
  const prudentialSummary = useMemo(() => getSentimentSummary(prudentialComments), [prudentialComments]);
  const chartData = [{
    name: 'Allianz',
    positif: allianzSummary.positif,
    negatif: allianzSummary.negatif,
    netral: allianzSummary.netral
  }, {
    name: 'Prudential',
    positif: prudentialSummary.positif,
    negatif: prudentialSummary.negatif,
    netral: prudentialSummary.netral
  }];
  const exportData = [{
    perusahaan: 'Allianz',
    ...allianzSummary,
    total: allianzComments.length
  }, {
    perusahaan: 'Prudential',
    ...prudentialSummary,
    total: prudentialComments.length
  }];
  return <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Analisis Sentimen</h1>
              <p className="text-muted-foreground">Perbandingan Allianz vs Prudential dari komentar YouTube</p>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <DateRangeFilter startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
            <div className="flex gap-2">
              <ExportButton data={exportData} filename="ringkasan-sentimen" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex-wrap gap-3 flex items-start justify-center">
            <Button onClick={() => navigate('/detail-allianz')} variant="outline" className="bg-[#cfbff6]">
              Detail Allianz
            </Button>
            <Button onClick={() => navigate('/detail-prudential')} variant="outline">
              Detail Prudential
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6">
          {/* Bar Chart */}
          <SentimentBarChart data={chartData} title="Perbandingan Sentimen Allianz vs Prudential" />

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <SentimentSummaryCard company="Allianz" positif={allianzSummary.positif} negatif={allianzSummary.negatif} netral={allianzSummary.netral} total={allianzComments.length} />
            <SentimentSummaryCard company="Prudential" positif={prudentialSummary.positif} negatif={prudentialSummary.negatif} netral={prudentialSummary.netral} total={prudentialComments.length} className="bg-[#cfbff6]" />
          </div>

          {/* Conclusion */}
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-xl font-semibold mb-4">Kesimpulan</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Berdasarkan analisis {allianzComments.length + prudentialComments.length} komentar YouTube:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-foreground">Allianz</strong> memiliki {allianzSummary.positif} komentar positif 
                  ({(allianzSummary.positif / allianzComments.length * 100).toFixed(1)}%), 
                  {allianzSummary.negatif} negatif, dan {allianzSummary.netral} netral.
                </li>
                <li>
                  <strong className="text-foreground">Prudential</strong> memiliki {prudentialSummary.positif} komentar positif 
                  ({(prudentialSummary.positif / prudentialComments.length * 100).toFixed(1)}%), 
                  {prudentialSummary.negatif} negatif, dan {prudentialSummary.netral} netral.
                </li>
                <li>
                  {allianzSummary.positif > prudentialSummary.positif ? 'Allianz memiliki sentimen positif lebih banyak dibandingkan Prudential.' : allianzSummary.positif < prudentialSummary.positif ? 'Prudential memiliki sentimen positif lebih banyak dibandingkan Allianz.' : 'Kedua perusahaan memiliki jumlah sentimen positif yang sama.'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;
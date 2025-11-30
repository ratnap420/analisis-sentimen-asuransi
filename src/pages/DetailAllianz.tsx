import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SentimentPieChart } from '@/components/SentimentPieChart';
import { CommentTable } from '@/components/CommentTable';
import { DateRangeFilter } from '@/components/DateRangeFilter';
import { ExportButton } from '@/components/ExportButton';
import { getFilteredComments, getSentimentSummary } from '@/data/mockData';
import { ArrowLeft, Building2 } from 'lucide-react';
const DetailAllianz = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const comments = useMemo(() => getFilteredComments('allianz', startDate, endDate), [startDate, endDate]);
  const summary = useMemo(() => getSentimentSummary(comments), [comments]);
  return <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold text-foreground">Detail Analisis Allianz</h1>
                <p className="text-muted-foreground">Analisis sentimen komentar YouTube tentang Allianz</p>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <DateRangeFilter startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
            <div className="flex gap-2">
              
              <ExportButton data={comments} filename="komentar-allianz" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-card rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-foreground">{comments.length}</p>
              <p className="text-sm text-muted-foreground">Total Komentar</p>
            </div>
            <div className="bg-card rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-green-600">{summary.positif}</p>
              <p className="text-sm text-muted-foreground">Positif</p>
            </div>
            <div className="bg-card rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-destructive">{summary.negatif}</p>
              <p className="text-sm text-muted-foreground">Negatif</p>
            </div>
            <div className="bg-card rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-muted-foreground">{summary.netral}</p>
              <p className="text-sm text-muted-foreground">Netral</p>
            </div>
          </div>

          {/* Pie Chart */}
          <SentimentPieChart positif={summary.positif} negatif={summary.negatif} netral={summary.netral} title="Distribusi Sentimen Allianz" />

          {/* Comments Table */}
          <CommentTable comments={comments} title="Daftar Komentar Allianz" />
        </div>
      </div>
    </div>;
};
export default DetailAllianz;
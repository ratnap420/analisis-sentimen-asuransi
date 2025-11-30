import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import type { Comment } from '@/data/mockData';

interface ExportButtonProps {
  data: Comment[] | Record<string, unknown>[];
  filename: string;
}

export const ExportButton = ({ data, filename }: ExportButtonProps) => {
  const exportToCSV = () => {
    if (data.length === 0) {
      toast.error('Tidak ada data untuk diekspor');
      return;
    }

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = (row as Record<string, unknown>)[header];
          const stringValue = String(value ?? '');
          return `"${stringValue.replace(/"/g, '""')}"`;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}.csv`;
    link.click();
    toast.success('Data berhasil diekspor ke CSV');
  };

  const exportToJSON = () => {
    if (data.length === 0) {
      toast.error('Tidak ada data untuk diekspor');
      return;
    }

    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}.json`;
    link.click();
    toast.success('Data berhasil diekspor ke JSON');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={exportToCSV}>
          Export sebagai CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToJSON}>
          Export sebagai JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

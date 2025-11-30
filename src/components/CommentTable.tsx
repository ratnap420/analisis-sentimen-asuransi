import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Comment } from '@/data/mockData';

interface CommentTableProps {
  comments: Comment[];
  title: string;
}

const getSentimentBadgeVariant = (sentiment: Comment['sentiment']) => {
  switch (sentiment) {
    case 'positif':
      return 'default';
    case 'negatif':
      return 'destructive';
    case 'netral':
      return 'secondary';
  }
};

const getSentimentLabel = (sentiment: Comment['sentiment']) => {
  switch (sentiment) {
    case 'positif':
      return 'Positif';
    case 'negatif':
      return 'Negatif';
    case 'netral':
      return 'Netral';
  }
};

export const CommentTable = ({ comments, title }: CommentTableProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Komentar</TableHead>
                <TableHead>Sentimen</TableHead>
                <TableHead>Judul Video</TableHead>
                <TableHead>Tanggal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                    Tidak ada komentar ditemukan
                  </TableCell>
                </TableRow>
              ) : (
                comments.map((comment) => (
                  <TableRow key={comment.id}>
                    <TableCell className="font-medium">{comment.text}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={getSentimentBadgeVariant(comment.sentiment)}
                        className={comment.sentiment === 'positif' ? 'bg-green-600 hover:bg-green-700' : ''}
                      >
                        {getSentimentLabel(comment.sentiment)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{comment.videoTitle}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(comment.date).toLocaleDateString('id-ID')}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export interface Comment {
  id: string;
  text: string;
  sentiment: 'positif' | 'negatif' | 'netral';
  videoTitle: string;
  date: string;
  company: 'allianz' | 'prudential';
}

export interface SentimentSummary {
  positif: number;
  negatif: number;
  netral: number;
}

export const mockComments: Comment[] = [
  // Allianz comments
  { id: '1', text: 'Pelayanan klaim Allianz sangat cepat dan memuaskan!', sentiment: 'positif', videoTitle: 'Review Allianz Indonesia 2024', date: '2024-01-15', company: 'allianz' },
  { id: '2', text: 'Proses klaimnya ribet banget, harus bolak-balik kirim dokumen', sentiment: 'negatif', videoTitle: 'Pengalaman Klaim Asuransi Allianz', date: '2024-01-20', company: 'allianz' },
  { id: '3', text: 'Preminya standar sih, tidak terlalu mahal tidak terlalu murah', sentiment: 'netral', videoTitle: 'Perbandingan Premi Asuransi 2024', date: '2024-02-05', company: 'allianz' },
  { id: '4', text: 'Agent Allianz sangat membantu menjelaskan produknya', sentiment: 'positif', videoTitle: 'Tips Memilih Asuransi Jiwa', date: '2024-02-10', company: 'allianz' },
  { id: '5', text: 'Customer service susah dihubungi', sentiment: 'negatif', videoTitle: 'Review Allianz Indonesia 2024', date: '2024-02-15', company: 'allianz' },
  { id: '6', text: 'Sudah 5 tahun pakai Allianz, sangat puas dengan layanannya', sentiment: 'positif', videoTitle: 'Testimoni Nasabah Allianz', date: '2024-02-20', company: 'allianz' },
  { id: '7', text: 'Biasa aja sih, sama seperti asuransi lain', sentiment: 'netral', videoTitle: 'Perbandingan Premi Asuransi 2024', date: '2024-03-01', company: 'allianz' },
  { id: '8', text: 'Kecewa dengan penolakan klaim tanpa alasan jelas', sentiment: 'negatif', videoTitle: 'Pengalaman Klaim Asuransi Allianz', date: '2024-03-05', company: 'allianz' },
  { id: '9', text: 'Aplikasi mobile Allianz sangat user friendly', sentiment: 'positif', videoTitle: 'Review Aplikasi Asuransi Digital', date: '2024-03-10', company: 'allianz' },
  { id: '10', text: 'Produk unit link nya menguntungkan', sentiment: 'positif', videoTitle: 'Investasi Unit Link Allianz', date: '2024-03-15', company: 'allianz' },
  { id: '11', text: 'Lumayan lah untuk proteksi keluarga', sentiment: 'netral', videoTitle: 'Tips Memilih Asuransi Jiwa', date: '2024-03-20', company: 'allianz' },
  { id: '12', text: 'Proses pengajuan sangat lama', sentiment: 'negatif', videoTitle: 'Pengalaman Klaim Asuransi Allianz', date: '2024-03-25', company: 'allianz' },
  
  // Prudential comments
  { id: '13', text: 'Prudential terpercaya, sudah puluhan tahun di Indonesia', sentiment: 'positif', videoTitle: 'Review Prudential Indonesia 2024', date: '2024-01-10', company: 'prudential' },
  { id: '14', text: 'Premi Prudential terlalu mahal dibanding kompetitor', sentiment: 'negatif', videoTitle: 'Perbandingan Premi Asuransi 2024', date: '2024-01-18', company: 'prudential' },
  { id: '15', text: 'Produknya lengkap, banyak pilihan', sentiment: 'netral', videoTitle: 'Produk Asuransi Prudential Terbaru', date: '2024-01-25', company: 'prudential' },
  { id: '16', text: 'Agen Prudential sangat profesional dan informatif', sentiment: 'positif', videoTitle: 'Tips Memilih Asuransi Kesehatan', date: '2024-02-01', company: 'prudential' },
  { id: '17', text: 'Proses klaim lancar tanpa hambatan', sentiment: 'positif', videoTitle: 'Testimoni Nasabah Prudential', date: '2024-02-08', company: 'prudential' },
  { id: '18', text: 'Potongan biaya administrasi terlalu besar', sentiment: 'negatif', videoTitle: 'Review Prudential Indonesia 2024', date: '2024-02-12', company: 'prudential' },
  { id: '19', text: 'Standar asuransi pada umumnya', sentiment: 'netral', videoTitle: 'Perbandingan Premi Asuransi 2024', date: '2024-02-18', company: 'prudential' },
  { id: '20', text: 'Hospital cash plan nya sangat bermanfaat', sentiment: 'positif', videoTitle: 'Produk Asuransi Prudential Terbaru', date: '2024-02-25', company: 'prudential' },
  { id: '21', text: 'Susah dapat info yang jelas tentang polis', sentiment: 'negatif', videoTitle: 'Tips Memilih Asuransi Kesehatan', date: '2024-03-02', company: 'prudential' },
  { id: '22', text: 'Cukup puas dengan layanan Prudential', sentiment: 'positif', videoTitle: 'Testimoni Nasabah Prudential', date: '2024-03-08', company: 'prudential' },
  { id: '23', text: 'Tidak ada keluhan khusus', sentiment: 'netral', videoTitle: 'Review Prudential Indonesia 2024', date: '2024-03-12', company: 'prudential' },
  { id: '24', text: 'Customer service responsif dan membantu', sentiment: 'positif', videoTitle: 'Produk Asuransi Prudential Terbaru', date: '2024-03-18', company: 'prudential' },
  { id: '25', text: 'Klaim ditolak dengan alasan yang tidak masuk akal', sentiment: 'negatif', videoTitle: 'Tips Memilih Asuransi Kesehatan', date: '2024-03-22', company: 'prudential' },
  { id: '26', text: 'PRUlink nya bagus untuk investasi jangka panjang', sentiment: 'positif', videoTitle: 'Investasi Unit Link Prudential', date: '2024-03-28', company: 'prudential' },
];

export const getFilteredComments = (company: 'allianz' | 'prudential', startDate?: Date, endDate?: Date): Comment[] => {
  return mockComments.filter(comment => {
    if (comment.company !== company) return false;
    if (startDate && new Date(comment.date) < startDate) return false;
    if (endDate && new Date(comment.date) > endDate) return false;
    return true;
  });
};

export const getSentimentSummary = (comments: Comment[]): SentimentSummary => {
  return comments.reduce((acc, comment) => {
    acc[comment.sentiment]++;
    return acc;
  }, { positif: 0, negatif: 0, netral: 0 });
};

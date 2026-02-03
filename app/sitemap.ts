import { MetadataRoute } from 'next';
import { fullData } from '@/lib/data'; // ตรวจสอบ Path ให้ตรงกับที่เก็บไฟล์ data.tsx

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zocaloan.info';

  // 1. ดึง Keys ทั้งหมดออกมาจาก fullData (เช่น 'loan-in-one-hour', 'personal-loans-online', ...)
  const slugs = Object.keys(fullData);

  const staticPages = [
    '',
    '/about',
    '/emergency-cash-loans-online',
    '/personal-loans-online',
    '/zoca-loans-review',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.5, // หน้าแรกสำคัญสุด (1.0) หน้าอื่นๆ รองลงมา
  }));
// 2. ดึงหน้า Dynamic จาก fullData อัตโนมัติ
const dynamicPages = Object.keys(fullData).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8, // หน้าบทความมีความสำคัญสูง
  }));

  // 3. รวมทั้งสอง Array เข้าด้วยกัน
  return [...staticPages, ...dynamicPages];
}
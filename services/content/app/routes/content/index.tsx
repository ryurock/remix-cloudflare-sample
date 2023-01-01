import { Header } from '@sample-workers/components/src/Header';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      {/* 追加 */}
      <Header />
      <h1>B Worker</h1>
    </div>
  );
}

import { useState } from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

interface Schedule {
  week: string[];
  saturday: string[];
  sunday: string[];
}

interface SchedulesType {
  coreauToSobral: Schedule;
  sobralToCoreau: Schedule;
}

const schedules: SchedulesType = {
  coreauToSobral: {
    week: ['05:40', '05:55', '06:10', '07:10', '07:50', '08:30', '09:20', '10:10', '11:00', '11:50', '12:40', '13:30', '15:00'],
    saturday: ['05:50', '06:10', '06:50', '07:30', '07:50', '08:30', '09:20', '10:10', '11:00', '11:50', '12:10', '13:00', '13:20', '15:00'],
    sunday: ['06:00', '13:00'],
  },
  sobralToCoreau: {
    week: ['07:30', '08:15', '09:50', '10:20', '11:00', '11:40', '12:30', '13:20', '14:10', '15:00', '15:50', '16:40', '17:30'],
    saturday: ['07:30', '08:10', '08:50', '09:30', '10:10', '10:50', '11:40', '12:30', '13:20', '14:10', '15:00', '15:50', '16:40', '17:30'],
    sunday: ['07:30', '14:30'],
  },
};

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<keyof Schedule>('week');

  const handleSelectChange = (event: any) => {
    setSelectedDay(event.target.value);
  };

  const renderHorarios = (direction: keyof SchedulesType, selectedDay: keyof Schedule) => (
    <ul>
      {schedules[direction][selectedDay].map((horario, index) => (
        <li key={index} className={styles.rowList}>{horario}</li>
      ))}
    </ul>
  );

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <header className={styles.header}>
          <h2>
            Horários Topic Coreaú/Sobral
          </h2>
        </header>

        <main className={styles.main}>
          <div className={styles.headerSchedules}>
            <label htmlFor="daySelect">Selecione o período: </label>
            <select id="daySelect" className={styles.select} value={selectedDay} onChange={handleSelectChange}>
              <option value="week">Semana</option>
              <option value="saturday">Sábado</option>
              <option value="sunday">Domingo</option>
            </select>
          </div>

          <div className={styles.containerColumns}>
            <div className={styles.column}>
              <h3 className={styles.textColumn}>Coreaú - Sobral</h3>
              {renderHorarios('coreauToSobral', selectedDay)}
            </div>
            <div className={styles.column}>
              <h3 className={styles.textColumn}>Sobral - Coreaú</h3>
              {renderHorarios('sobralToCoreau', selectedDay)}
            </div>
          </div>
        </main>

        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3821668752796554"
          data-ad-slot="4032059096"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script>

        <footer className={styles.footer}>
          <Image
            src="https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-2.png"
            width={30}
            height={30}
            alt="WhatsApp"
          />
          <div className={styles.footerContent}>
            <a href='https://chat.whatsapp.com/CXtM5hqrYL4AmHn5FbLVIl' target='_blank'>Grupo Universitários Noite</a>
            <a href='https://chat.whatsapp.com/Co85HIYs6bs1jJX4Mn9msZ' target='_blank'>Grupo Universitários Manhã</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

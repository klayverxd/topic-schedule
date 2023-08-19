import { useState } from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
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
    week: ['08:00', '10:00', '12:00'],
    saturday: ['09:00', '11:00', '13:00'],
    sunday: ['10:00', '12:00', '14:00'],
  },
  sobralToCoreau: {
    week: ['09:00', '11:00', '13:00'],
    saturday: ['10:00', '12:00', '14:00'],
    sunday: ['11:00', '13:00', '15:00'],
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
        <li key={index}>{horario}</li>
      ))}
    </ul>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Horários Topic Coreaú/Sobral
      </header>

      <div className={styles.main}>
        <div className={styles.headerSchedules}>
          <label htmlFor="daySelect">Selecione o período: </label>
          <select id="daySelect" value={selectedDay} onChange={handleSelectChange}>
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
      </div>


      <footer className={styles.footer}>
        <a href='https://chat.whatsapp.com/CXtM5hqrYL4AmHn5FbLVIl' target='_blank'>Grupo Universitários Noite</a>
        <a href='https://chat.whatsapp.com/Co85HIYs6bs1jJX4Mn9msZ' target='_blank'>Grupo Universitários Manhã</a>
      </footer>

    </div>
  )
}

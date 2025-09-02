const day = 'Wednesda';

if (day === 'Monday') {
  console.log('Es lunes');
} else if (day === 'Tuesday') {
  console.log('Es martes');
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log('Es miercoles o jueves');
} else if (day === 'Friday') {
  console.log('Es viernes');
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log('Disfruta tu fin de semana');
} else {
  console.log('Este día no es válido');
}
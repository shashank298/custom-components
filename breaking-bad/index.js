const elements =  new Set([
  'Ac',
  'Al',
  'Am',
  'Sb',
  'Ar',
  'As',
  'At',
  'Ba',
  'Bk',
  'Be',
  'Bi',
  'Bh',
  'B',
  'Br',
  'Cd',
  'Ca',
  'Cf',
  'C',
  'Ce',
  'Cs',
  'Cl',
  'Cr',
  'Co',
  'Cn',
  'Cu',
  'Cm',
  'Ds',
  'Db',
  'Dy',
  'Es',
  'Er',
  'Eu',
  'Fm',
  'Fl',
  'F',
  'Fr',
  'Gd',
  'Ga',
  'Ge',
  'Au',
  'Hf',
  'Hs',
  'He',
  'Ho',
  'H',
  'In',
  'I',
  'Ir',
  'Fe',
  'Kr',
  'La',
  'Lr',
  'Pb',
  'Li',
  'Lv',
  'Lu',
  'Mg',
  'Mn',
  'Mt',
  'Md',
  'Hg',
  'Mo',
  'Mc',
  'Nd',
  'Ne',
  'Np',
  'Ni',
  'Nh',
  'Nb',
  'N',
  'No',
  'Og',
  'Os',
  'O',
  'Pd',
  'P',
  'Pt',
  'Pu',
  'Po',
  'K',
  'Pr',
  'Pm',
  'Pa',
  'Ra',
  'Rn',
  'Re',
  'Rh',
  'Rg',
  'Rb',
  'Ru',
  'Rf',
  'Sm',
  'Sc',
  'Sg',
  'Se',
  'Si',
  'Ag',
  'Na',
  'Sr',
  'S',
  'Ta',
  'Tc',
  'Te',
  'Ts',
  'Tb',
  'Tl',
  'Th',
  'Tm',
  'Sn',
  'Ti',
  'W',
  'U',
  'V',
  'Xe',
  'Yb',
  'Y',
  'Zn',
  'Zr'
])

const button = document.querySelector(".button")
const result = document.querySelector(".result")
const fname = document.querySelector("#firstName")
const lname = document.querySelector("#lastName")


function breakWords(str){
  const length = str.length
  let result = []
  for(let i=0;i<length;i++){
    const firstEl = str[i].toUpperCase()
    const secondEl = `${firstEl}${str[i+1]}`
   

    if(elements.has(secondEl)){
      result.push(str.slice(0,i), secondEl, str.slice(i+2,length))
      break;
    }

    if(elements.has(firstEl)){
      result.push(str.slice(0,i), firstEl, str.slice(i+1,length))
      break;
    }
  }

  if(!result.length){
    result.push("", "", str)
  }
  return result;
}

function breakify(){
  const first = breakWords(fname.value)
  const last = breakWords(lname.value)
  const styleFname = `<span class="styled">${first[1]}</span>`
  const styleLname = `<span class="styled">${last[1]}</span>`
  const div =  `
    <div class="result-row">
        <span>${first[0] && first[0]}</span>
        ${first[1] && styleFname}
        <span>${first[2]}</span>
    </div>
    <div class="result-row">
      <span>${last[0] && last[0]}</span>
      ${last[1] && styleLname}
      <span>${last[2]}</span>
    </div>
  `
  result.innerHTML = div
  console.log({first, last})
}

button.addEventListener('click', breakify)
import React from 'react'

const Die = ({face}) => {
    return (
        <i className={`fas fa-dice-${face}`}></i>
    )
}
// const Die = ({ die1, die2 }) => {
//     if (die1 === 1) {
//         return (
//             <i className="fas fa-dice-one"></i>
//         )
//     } else if (die1 === 2) {
//         return (
//             <i className="fas fa-dice-two"></i>
//         )
//     } else if (die1 === 3) {
//         return (
//             <i className="fas fa-dice-three"></i>
//         )
//     } else if (die1 === 4) {
//         return (
//             <i className="fas fa-dice-four"></i>
//         )
//     } else if (die1 === 5) {
//         return (
//             <i className="fas fa-dice-five"></i>
//         )
//     } else if (die1 === 6) {
//         return (
//             <i className="fas fa-dice-six"></i>
//         )
//     }
//     if (die2 === 1) {
//         return (
//             <i className="fas fa-dice-one"></i>
//         )
//     } else if (die2 === 2) {
//         return (
//             <i className="fas fa-dice-two"></i>
//         )
//     } else if (die2 === 3) {
//         return (
//             <i className="fas fa-dice-three"></i>
//         )
//     } else if (die2 === 4) {
//         return (
//             <i className="fas fa-dice-four"></i>
//         )
//     } else if (die2 === 5) {
//         return (
//             <i className="fas fa-dice-five"></i>
//         )
//     } else if (die2 === 6) {
//         return (
//             <i className="fas fa-dice-six"></i>
//         )
//     }
// }

export default Die
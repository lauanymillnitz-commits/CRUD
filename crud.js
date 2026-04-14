import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const alunosRef = collection(db, "alunos");

// BOTÃO
const btn = document.getElementById("btnSalvar");
btn.addEventListener("click", salvar);

// SALVAR
async function salvar() {
  const nome = document.getElementById("nome").value;
  const nota = Number(document.getElementById("nota").value);

  if (!nome || nota === "") {
    alert("Preencha tudo");
    return;
  }

  try {
    await addDoc(alunosRef, { nome, nota });
    console.log("SALVOU 🔥");

    // limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";

    carregar();
  } catch (erro) {
    console.error("ERRO AO SALVAR:", erro);
  }
}

// LISTAR
async function carregar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const dados = await getDocs(alunosRef);

  dados.forEach(doc => {
    const aluno = doc.data();

    const li = document.createElement("li");
    const status = aluno.nota >= 7 ? "✅ Aprovado" : "❌ Reprovado";

    li.textContent = `${aluno.nome} - Nota: ${aluno.nota} - ${status}`;

    lista.appendChild(li);
  });
}

carregar();
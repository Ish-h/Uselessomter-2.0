import jsPDF from "jspdf";

export function generateCertificate({ teamName, projectName, score, commentary }) {
  const doc = new jsPDF();

  doc.setFillColor("#fff7e6");
  doc.rect(0, 0, 210, 297, "F");

  doc.setFontSize(24);
  doc.text("🎓 Certificate of Uselessness", 105, 40, null, null, "center");

  doc.setFontSize(14);
  doc.text(`🏆 Awarded to team "${teamName}"`, 105, 60, null, null, "center");
  doc.text(`📂 Project: "${projectName}"`, 105, 75, null, null, "center");
  doc.text(`🚮 Uselessness Score: ${score}%`, 105, 90, null, null, "center");

  doc.setFontSize(12);
  doc.text(`💬 ${commentary}`, 105, 110, null, null, "center");

  // Signature
  doc.setFontSize(12);
  doc.text("🖋️ Dr. Trashit Roy", 150, 250);
  doc.text("Lead Juror", 150, 257);
  doc.text("Trashalyzer 9000", 150, 264);

  // Seal (emoji)
  doc.setFontSize(30);
  doc.text("🥇", 30, 260);

  doc.save("uselessness-certificate.pdf");
}

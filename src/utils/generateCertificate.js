import html2pdf from 'html2pdf.js';

export function generateCertificate({ teamName, projectName, score, commentary }) {
  const element = document.getElementById('certificate-content');

  // Fill the template with actual data
  if (element) {
    element.querySelector('#cert-team').innerText = teamName;
    element.querySelector('#cert-project').innerText = projectName;
    element.querySelector('#cert-score').innerText = score + '%';
    element.querySelector('#cert-comment').innerText = commentary;

    const opt = {
      margin: 0.5,
      filename: 'uselessness-certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  }
}

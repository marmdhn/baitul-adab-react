"use client";

import { useState } from "react";

export default function PendaftaranForm() {
  const [formData, setFormData] = useState({
    namaCalonSiswa: "",
    namaOrangTua: "",
    nomorWhatsApp: "",
    alamat: "",
    usiaAnak: "",
    programKelas: "",
    pesan: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const {
      namaCalonSiswa,
      namaOrangTua,
      nomorWhatsApp,
      alamat,
      usiaAnak,
      programKelas,
      pesan,
    } = formData;
    const message = `Nama Calon Siswa: ${namaCalonSiswa}%0aNama Orang Tua/Wali: ${namaOrangTua}%0aNomor WhatsApp: ${nomorWhatsApp}%0aAlamat: ${alamat}%0aUsia Anak: ${usiaAnak}%0aProgram Kelas: ${programKelas}%0aPesan: ${pesan}`;
    const whatsappURL = `https://wa.me/6285333392421?text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="mt-8 mb-16">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="namaCalonSiswa"
          value={formData.namaCalonSiswa}
          onChange={handleChange}
          placeholder="Nama Calon Siswa*"
          className="input input-bordered bg-transparent w-full text-neutral"
        />
        <input
          type="text"
          name="namaOrangTua"
          value={formData.namaOrangTua}
          onChange={handleChange}
          placeholder="Nama Orang Tua / Wali *"
          className="input input-bordered bg-transparent w-full text-neutral"
        />
        <input
          type="number"
          name="nomorWhatsApp"
          value={formData.nomorWhatsApp}
          onChange={handleChange}
          placeholder="Nomor WhatsApp Orang Tua / Wali *"
          className="input input-bordered bg-transparent w-full text-neutral"
        />
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          placeholder="Alamat *"
          className="input input-bordered bg-transparent w-full text-neutral"
        />
        <input
          type="number"
          name="usiaAnak"
          value={formData.usiaAnak}
          onChange={handleChange}
          placeholder="Usia Anak *"
          className="input input-bordered bg-transparent w-full text-neutral"
        />
        <select
          name="programKelas"
          className="select select-bordered w-full text-neutral bg-transparent"
          value={formData.programKelas}
          onChange={handleChange}
        >
          <option value="" disabled>
            Pilih Program Kelas
          </option>
          <option value="Playgroup Regular">Playgroup Regular</option>
          <option value="Playgroup Plus Daycare">Playgroup Plus Daycare</option>
          <option value="Kindergarten Regular">Kindergarten Regular</option>
          <option value="Kindergarten Plus Daycare">
            Kindergarten Plus Daycare
          </option>
        </select>
        <input
          type="text"
          name="pesan"
          value={formData.pesan}
          onChange={handleChange}
          placeholder="Pesan/Pertanyaan *"
          className="input input-bordered bg-transparent w-full text-neutral"
        />
        <button type="submit" className="btn btn-primary text-white mx-auto">
          KIRIM VIA WHATSAPP
        </button>
      </form>
    </div>
  );
}

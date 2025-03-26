import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    s_title: "",
    s_platform: null,
    s_link: "",
    s_price: null,
    s_discount: null,
    s_start_date: null,
    s_end_date: null,
    s_desc: "",
    s_views: null,
    s_followers: null,
    s_category: "",
    s_location: ""
  });

  const platforms = ["Instagram", "Facebook", "TikTok", "YouTube", "Twitter"];
  const categories = ["Fashion", "Technology", "Food", "Lifestyle", "Gaming"];

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.value ?? e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Tambah Layanan</h2>
      <div className="grid">
        <div className="col-6">
          <label>Judul Layanan</label>
          <InputText value={formData.s_title} onChange={(e) => handleChange(e, "s_title")} className="w-full" />
        </div>
        <div className="col-6">
          <label>Platform</label>
          <Dropdown value={formData.s_platform} options={platforms} onChange={(e) => handleChange(e, "s_platform")} className="w-full" placeholder="Pilih Platform" />
        </div>
        <div className="col-6">
          <label>Link Profil</label>
          <InputText value={formData.s_link} onChange={(e) => handleChange(e, "s_link")} className="w-full" />
        </div>
        <div className="col-6">
          <label>Harga</label>
          <InputNumber value={formData.s_price} onChange={(e) => handleChange(e, "s_price")} className="w-full" mode="currency" currency="IDR" />
        </div>
        <div className="col-6">
          <label>Diskon</label>
          <InputNumber value={formData.s_discount} onChange={(e) => handleChange(e, "s_discount")} className="w-full" />
        </div>
        <div className="col-6">
          <label>Tanggal Mulai</label>
          <Calendar value={formData.s_start_date} onChange={(e) => handleChange(e, "s_start_date")} className="w-full" showIcon />
        </div>
        <div className="col-6">
          <label>Tanggal Berakhir</label>
          <Calendar value={formData.s_end_date} onChange={(e) => handleChange(e, "s_end_date")} className="w-full" showIcon />
        </div>
        <div className="col-6">
          <label>Jumlah Views</label>
          <InputNumber value={formData.s_views} onChange={(e) => handleChange(e, "s_views")} className="w-full" />
        </div>
        <div className="col-6">
          <label>Jumlah Followers</label>
          <InputNumber value={formData.s_followers} onChange={(e) => handleChange(e, "s_followers")} className="w-full" />
        </div>
        <div className="col-6">
          <label>Kategori</label>
          <Dropdown value={formData.s_category} options={categories} onChange={(e) => handleChange(e, "s_category")} className="w-full" placeholder="Pilih Kategori" />
        </div>
        <div className="col-6">
          <label>Lokasi</label>
          <InputText value={formData.s_location} onChange={(e) => handleChange(e, "s_location")} className="w-full" />
        </div>
        <div className="col-12">
          <label>Deskripsi</label>
          {/* <Textarea value={formData.s_desc} onChange={(e) => handleChange(e, "s_desc")} className="w-full" rows={4} /> */}
        </div>
        <div className="col-12 text-right mt-4">
          <Button label="Submit" onClick={handleSubmit} className="p-button-primary" />
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;

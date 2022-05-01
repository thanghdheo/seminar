import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { client } from "../APIs";
import { getCategory } from "../APIs/Category";
import { Button, Input, AvatarUpload } from "../shared/ui";
import { Select } from "../shared/ui/forms/Select";
import Textarea from "../shared/ui/forms/Textarea";

function CreateProduct() {
  const [categories, setCategoris] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCategory().then((res) =>
      setCategoris(
        res.map((item) => ({
          value: item._id,
          label: item.name,
        }))
      )
    );
  }, []);

  console.log(categories);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: null,
      category: "",
      description: "",
      name: "",
      price: "",
      quantity: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const doc = {
      _type: "product",
      name: data.name,
      price: data.price * 1,
      quantity: data.quantity * 1,
      description: data.description,
      categoryProduct: {
        _ref: data.category,
      },
      image: {
        asset: {
          _ref: "image-7fa2587ada842023f3bad947e7cb684f82920f2a-540x739-jpg",
        },
      },
    };
    client
      .create(doc)
      .then((res) => {
        swal("Thông báo", "Thêm thành công", "success");
        navigate('/')
      })
      .catch(() => {
        swal("Thông báo", "Thêm thất bại", "error");
      });
  };

  return (
    <div className="md:pl-64 flex flex-col flex-1 py-6">
      <main className="flex-1">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-6 h-full">
              <header className="flex justify-between items-center">
                <h4 className="font-medium text-lg text-gray-900">
                  Thêm mới sản phẩm
                </h4>
                <div className="inline-flex gap-x-3">
                  <Button type="button" color="white">
                    Bỏ qua
                  </Button>
                  <Button type="submit">Lưu</Button>
                </div>
              </header>
              <main className="bg-white p-6 rounded-md">
                <div className="mx-auto max-w-3xl flex flex-col space-y-6">
                  {/* --- Avatar --- */}
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-700 text-sm">Ảnh sản phẩm</span>
                    <span className="inline-flex items-center space-x-5">
                      <Controller
                        control={control}
                        name="avatar"
                        render={({ field: { onChange } }) => (
                          <div>
                            <AvatarUpload name="avatar" getFile={onChange} />
                          </div>
                        )}
                      />
                    </span>
                  </div>
                  {/* --- Avatar --- */}
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-y-6 lg:gap-x-12 gap-x-6">
                    <Controller
                      control={control}
                      name="name"
                      rules={{ required: "Yêu cầu nhập tên sản phẩm" }}
                      render={({ field }) => (
                        <Input
                          required
                          type="text"
                          label="Tên sản phẩm"
                          placeholder="Nhập tên sản phẩm"
                          error={errors.name?.message}
                          {...field}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name="price"
                      rules={{ required: "Yêu cầu nhập giá sản phẩm" }}
                      render={({ field }) => (
                        <Input
                          required
                          type="number"
                          label="Giá sản phẩm"
                          placeholder="Nhập giá sản phẩm"
                          error={errors.price?.message}
                          {...field}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name="quantity"
                      rules={{ required: "Yêu cầu số lượng sản phẩm" }}
                      render={({ field }) => (
                        <Input
                          type="number"
                          required
                          label="Số lượng"
                          placeholder="Nhập số lượng sản phẩm"
                          error={errors.quantity?.message}
                          {...field}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name="category"
                      rules={{ required: "Yêu cầu chọn loại sản phẩm" }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          label="Loại sản phẩm"
                          select={value}
                          setSelect={onChange}
                          data={categories}
                          placeholder="Chọn loại sản phẩm"
                          error={errors.category?.message}
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-1 grid-cols-1 gap-y-6 lg:gap-x-12 gap-x-6">
                    <Controller
                      control={control}
                      name="description"
                      render={({ field }) => (
                        <Textarea
                          type="text"
                          label="Mô tả sản phẩm"
                          placeholder="Nhập mô tả sản phẩm"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
              </main>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateProduct;

export const Required = () => (
  <span className="text-radical-red-500 mr-2">*</span>
);

import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  DatePicker,
  Input,
  Radio,
  Select,
  AvatarUpload,
} from "shared/ui";

const dataEmployeeType = [
  { value: 1, label: "Thử việc" },
  { value: 2, label: "Chính thức" },
  { value: 3, label: "Nghỉ việc" },
];

const EmployeeConfig = ({ label = "Tạo mới nhân viên", data = {} }) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: data.avatar || null,
      id: data.id || "P-0001",
      name: data.name || "",
      birthday: data.birthday || null,
      sex: data.sex || 1,
      email: data.email || "",
      phone: data.phone || "",
      company: data.company || null,
      department: data.department || null,
      position: data.position || null,
      employeeType: data.employeeType || 1,
      dateIn: data.dateIn || null,
      dateOffice: data.dateOffice || null,
      dateOut: data.dateOut || null,
    },
  });

  console.log(watch());

  const onSubmit = data => console.log("Success!!!", { data });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-6 h-full">
        <header className="flex justify-between items-center">
          <h4 className="font-medium text-lg text-gray-900">{label}</h4>
          <div className="inline-flex gap-x-3">
            <Button type="button" color="white" onClick={() => router.back()}>
              Bỏ qua
            </Button>
            <Button type="submit">Lưu</Button>
          </div>
        </header>
        <main className="bg-white p-6 rounded-md">
          <div className="mx-auto max-w-3xl flex flex-col space-y-6">
            {/* --- Avatar --- */}
            <div className="flex flex-col space-y-1">
              <span className="text-gray-700 text-sm">Hình đại diện</span>
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
                name="id"
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Mã nhân viên"
                    placeholder={field.value}
                    disabled
                    error={errors.id?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="name"
                rules={{ required: "Yêu cầu nhập tên nhân viên!" }}
                render={({ field }) => (
                  <Input
                    required
                    type="text"
                    label="Tên nhân viên"
                    placeholder="Nhập tên"
                    error={errors.name?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="birthday"
                rules={{ required: "Yêu cầu nhập ngày sinh!" }}
                render={({ field }) => (
                  <div className="block text-sm font-medium text-gray-700">
                    <Required />
                    Ngày sinh
                    <DatePicker
                      placeholder="dd/mm/yyyy"
                      className="mt-1"
                      error={errors.birthday?.message}
                      {...field}
                    />
                    {errors.birthday && (
                      <span className="text-xs text-radical-red-600 font-light">
                        {errors.birthday.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="sex"
                render={({ field: { onChange, value } }) => (
                  <div className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700">
                      <Required />
                      Giới tính
                    </label>
                    <div className="space-x-6 flex mt-1">
                      <Radio
                        label="Nam"
                        name="sex"
                        checked={value === 1}
                        onChange={() => onChange(1)}
                      />
                      <Radio
                        label="Nữ"
                        name="sex"
                        checked={value === 2}
                        onChange={() => onChange(2)}
                      />
                    </div>
                  </div>
                )}
              />

              <Controller
                control={control}
                name="email"
                rules={{ required: "Yêu cầu nhập email!" }}
                render={({ field }) => (
                  <Input
                    type="email"
                    required
                    label="Email"
                    placeholder="Nhập email"
                    error={errors.email?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="phone"
                rules={{
                  required: "Yêu cầu nhập số điện thoại!",
                  minLength: {
                    value: 10,
                    message: "Số điện thoại không hơp lệ",
                  },
                  maxLength: {
                    value: 11,
                    message: "Số điện thoại không hơp lệ",
                  },
                }}
                render={({ field }) => (
                  <Input
                    type="number"
                    required
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại"
                    error={errors.phone?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="company"
                rules={{ required: "Yêu cầu chọn công ty!" }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Công ty"
                    select={value}
                    setSelect={onChange}
                    placeholder="Chọn công ty"
                    error={errors.company?.message}
                    required
                  />
                )}
              />

              <Controller
                control={control}
                name="department"
                rules={{ required: "Yêu cầu chọn phòng ban!" }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Phòng ban"
                    select={value}
                    setSelect={onChange}
                    placeholder="Chọn phòng ban"
                    error={errors.department?.message}
                    required
                  />
                )}
              />

              <Controller
                control={control}
                name="position"
                rules={{ required: "Yêu cầu chọn chức vụ!" }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Chức vụ"
                    select={value}
                    setSelect={onChange}
                    placeholder="Chọn chức vụ"
                    error={errors.position?.message}
                    required
                  />
                )}
              />

              <Controller
                control={control}
                name="employeeType"
                rules={{ required: "Yêu cầu chọn chức vụ!" }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Loại nhân viên"
                    data={dataEmployeeType}
                    select={value}
                    setSelect={onChange}
                    error={errors.employeeType?.message}
                    required
                  />
                )}
              />

              <Controller
                control={control}
                name="dateIn"
                render={({ field }) => (
                  <div className="block text-sm font-medium text-gray-700">
                    Ngày vào làm
                    <DatePicker
                      placeholder="dd/mm/yyyy"
                      className="mt-1"
                      {...field}
                    />
                  </div>
                )}
              />

              <Controller
                control={control}
                name="dateOffice"
                rules={{
                  validate: v =>
                    v >= getValues("dateIn") ||
                    "Ngày chính thức không được nhỏ hơn ngày vào làm",
                }}
                render={({ field }) => (
                  <div className="block text-sm font-medium text-gray-700">
                    Ngày vào chính thức
                    <DatePicker
                      placeholder="dd/mm/yyyy"
                      className="mt-1"
                      {...field}
                    />
                    {errors.dateOffice && (
                      <span className="text-xs text-radical-red-600 font-light">
                        {errors.dateOffice.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="dateOut"
                rules={{
                  validate: v =>
                    v >= getValues("dateOffice") ||
                    "Ngày nghỉ việc không được nhỏ hơn ngày chính thức",
                }}
                render={({ field }) => (
                  <div className="block text-sm font-medium text-gray-700">
                    Ngày nghỉ việc
                    <DatePicker
                      placeholder="dd/mm/yyyy"
                      className="mt-1"
                      {...field}
                    />
                    {errors.dateOut && (
                      <span className="text-xs text-radical-red-600 font-light">
                        {errors.dateOut.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </main>
      </div>
    </form>
  );
};

export default EmployeeConfig;

export const Required = () => (
  <span className="text-radical-red-500 mr-2">*</span>
);

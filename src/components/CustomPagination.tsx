import { Pagination } from "@heroui/react";

interface Props {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

export default function CustomPagination({ total, page, onChange }: Props) {
  return (
    <Pagination
      showControls
      initialPage={1}
      total={total}
      page={page}
      onChange={onChange}
      variant="faded"
      color="success"
    />
  );
}

import { Checkbox } from "@/components/ui/checkbox";

const CheckboxItems = ({ children, htmlFor }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxItems;

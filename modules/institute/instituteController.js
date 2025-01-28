import { collegeModel } from "./collegeModel.js";
import { competitiveExamModel } from "./competitiveExamModel.js";
import { schoolModel } from "./schoolModel.js";

export const school = async (req, res) => {
  try {
    const { education_board, medium, class_category, standard, subjects } = req.body;
    const findUser = await schoolModel.countDocuments({ user_id: req.id });
    if (findUser > 0) {
      return res.status(400).json({ message: "User's school already registered" });
    }
    const education_board_array = ["GSAB", "CBSE"];
    const medium_array = ["English", "Hindi"];
    const class_category_array = ["Pre-primary", "Primary", "Secondary", "Higher Secondary"];
    if (!education_board_array.includes(education_board)) {
      return res.status(400).json({ message: "Education board can be GSAB or CBSE" });
    }
    if (!medium_array.includes(medium)) {
      return res.status(400).json({ message: "Medium can be English or Hindi" });
    }
    if (!class_category_array.includes(class_category)) {
      return res
        .status(400)
        .json({ message: "Class category can be Pre-primary, Primary, Secondary or Higher Secondary" });
    }

    // For Pre Primary
    if (class_category === "Pre-primary") {
      const standard_array = ["LKG", "HKG"];
      if (!standard_array.includes(standard)) {
        return res.status(400).json({ message: "Standard for higher secondary can be LKG or HKG" });
      }
      const subjects_array = ["Drawing", "Singing"];
      for (let i = 0; i < subjects.length; i++) {
        if (!subjects_array.includes(subjects[i])) {
          return res.status(400).json({ message: "Subjects for pre primary standards can be Drawing or Singing" });
        }
      }
    }

    // For Primary
    if (class_category === "Primary") {
      const standard_array = ["1", "2", "3", "4"];
      if (!standard_array.includes(standard)) {
        return res.status(400).json({ message: "Standard for higher secondary can be 1, 2, 3 or 4" });
      }
      const subjects_array = ["Gujarati", "PE"];
      for (let i = 0; i < subjects.length; i++) {
        if (!subjects_array.includes(subjects[i])) {
          return res.status(400).json({ message: "Subjects for primary standards can be Gujarati or PE" });
        }
      }
    }

    // For Secondary
    if (class_category === "Secondary") {
      const standard_array = ["5", "6", "7"];
      if (!standard_array.includes(standard)) {
        return res.status(400).json({ message: "Standard for secondary can be 5, 6, or 7" });
      }
      const subjects_array = ["Science", "SS", "Sanskrit"];
      for (let i = 0; i < subjects.length; i++) {
        if (!subjects_array.includes(subjects[i])) {
          return res.status(400).json({ message: "Subjects for secondary standards can be Science, SS or Sanskrit" });
        }
      }
    }

    // For Higher Secondary
    if (class_category === "Higher Secondary") {
      const standard_array = ["8", "9", "10"];
      if (!standard_array.includes(standard)) {
        return res.status(400).json({ message: "Standard for higher secondary can be 8, 9 or 10" });
      }
      const subjects_array = ["Maths", "Physics"];
      for (let i = 0; i < subjects.length; i++) {
        if (!subjects_array.includes(subjects[i])) {
          return res.status(400).json({ message: "Subjects for higher secondary standards can be Maths or Physics" });
        }
      }
    }
    await schoolModel.create({ user_id: req.id, education_board, medium, class_category, standard, subjects });
    return res.status(201).json({ message: "User's school registration done successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const college = async (req, res) => {
  try {
    const { university, degree } = req.body;
    const findUser = await collegeModel.countDocuments({ user_id: req.id });
    if (findUser > 0) {
      return res.status(400).json({ message: "User's college already registered" });
    }
    const university_array = ["GTU", "AU", "GU", "KU"];
    if (!university_array.includes(university)) {
      return res.status(400).json({ message: "University can be GTU, AU, GU or KU" });
    }
    const degree_array = ["BE", "BTech", "BArch", "MBBS"];
    if (!degree_array.includes(degree)) {
      return res.status(400).json({ message: "Degree can be BE, BTech, BArch or MBBS" });
    }
    await collegeModel.create({ user_id: req.id, university, degree });
    return res.status(201).json({ message: "User's college registration done successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const competitiveExam = async (req, res) => {
  try {
    const { exam_name, exam_type } = req.body;
    const findUser = await competitiveExamModel.countDocuments({ user_id: req.id });
    if (findUser > 0) {
      return res.status(400).json({ message: "User's exam already registered" });
    }
    await competitiveExamModel.create({ user_id: req.id, exam_name, exam_type });
    return res.status(201).json({ message: "User's exam registration done successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

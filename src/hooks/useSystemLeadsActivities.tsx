import { useContext } from 'react';
import { ISystemLeadsActivitiesContext, SystemLeadsActivitiesContext } from '../context/leadsActivities';

const useSystemLeadsActivitiesContext = (): ISystemLeadsActivitiesContext  => {
  return useContext(SystemLeadsActivitiesContext);
};

export default useSystemLeadsActivitiesContext;